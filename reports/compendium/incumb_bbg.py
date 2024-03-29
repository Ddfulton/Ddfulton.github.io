import pandas as pd

x = pd.read_csv("incumb_bbg.csv")
facts = x.fact.tolist()
values = x.value.tolist()

format_dict = {
        "BS_COMM_LOAN": [1e6, "$"],
}

with open('incumb_bbg.js', 'w') as f:
  f.write("var data = {")
  f.write("\n")
  
  for i in range(len(facts)):
    fact = facts[i]
    value = values[i]
    print(fact, value)
    line = '\t"{}": {},\n'.format(fact, value)
    f.write(line.replace("nan", "NaN"))

  f.write("};")
  f.write("\n")
  with open('incumb_bbg_code.js', 'r') as g:
    for line in g.readlines():
      f.write(line)
  f.write("\n")
