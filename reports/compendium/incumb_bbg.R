library(tidyverse)
library(Rblpapi)
blpConnect()

incumbents <- c(
                "DBK GY Equity", 
                "GLE FP Equity", 
                # BNP Paribas BNP FP Equity
                # Santander SAN SM Equity
                # Credit Agricole ACA FP Equity
                # ING INGA NA Equity
                # UniCredit UCG IM Equity
                # BBVA SM Equity
                "JPM US Equity", 
                "BAC US Equity",
                # Wells WFC US Equity
                # Citi C US Equity
                "HSBA LN Equity", 
                "STAN LN Equity"
                # Lloyd's LLOY LN Equity
                # Barclays BARC LN Equity
)

fields <- c("BS_CONS_LOAN", "BS_COMM_LOAN",
            "BS_TOT_LOAN", "BS_CUSTOMER_DEPOSITS",
            "CUR_MKT_CAP", "EFF_RATIO", "NET_INCOME",
            "NET_REV", "PX_TO_TANG_BV_PER_SH",
            "BS_TIER_1_CAP_RATIO_FULLY_LOADED",
            "BS_TOT_ASSET")

x <- bdp(incumbents, fields)
x$bank <- rownames(x)
x <- x %>% mutate(CUR_MKT_CAP=CUR_MKT_CAP / 1e6)
rownames(x) <- NULL
x <- x %>% select(bank, names(x)[1:length(fields)])
x <- pivot_longer(x, fields)
x <- x %>% mutate(ticker=sapply(strsplit(bank," "), `[`, 1))
x <- x %>% select(ticker, name, value)
facts <- str_c(x$ticker, "-", x$name)
values <- x$value
out <- tibble(fact=facts, value=values)

write.csv(out, quote = FALSE, file="incumb_bbg.csv")
