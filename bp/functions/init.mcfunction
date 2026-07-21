Repeat Active not-condition
scoreboard remove @a[hasitem={item=spyglass,data=10},scores={Coins=600..}] Coins 600
chain active condition
give @a[hasitem={item=spyglass,data=10}]
chain active not-condition
clear @a[hasitem={item=spyglass,data=10}] spyglass 1 10
chain active not-condition
clone x1 y1 z1 x1 y1 z1 x2 y2 z2