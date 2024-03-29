# 配置指南

## 配置文件预览
```
#BUFF宝石
#格式: "宝石识别lore": "BUFF效果识别lore"
gem:
  "&b&l速度I": "[lore] &6[&c&lBUFF&6] &b速度I"
  "&b&l爱心": "[nbt] heart"
#可镶嵌白名单
whitelist:
  - "DIAMOND_SWORD"
  - "DIAMOND_AXE"
#高级白名单
#当需要镶嵌的物品符合全局白名单时
#将会触发高级白名单
#高级白名单不会进行提示
whitelist_plus:
  "&b&l速度I":
    - "DIAMOND_SWORD"
#强化完成提示
finish: "&a强化成功"
#已含有该lore提示
error: "&c强化失败 该物品已含有此属性"
#非白名单物品强化提示
invaild: "&c该物品不支持强化"
#强化完成播放声音
sound: "BLOCK_ANVIL_PLACE"
#检测lore给予药水效果
#格式: (支持多个药水效果)
#"BUFF效果识别lore":
#  - "[buff] 药水ID:等级"
#药水ID可前往 https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html 查看
#等级最高仅支持1-255 (原版限制)
#新格式
#"[buff] <药水效果>:<等级>:<持续时间>"
#"[particle] <Particle配置文件对应名称>"
#"[attack-skill] <MythicSkills名称>"
#"[mine-skill] <MythicSkills名称>"
#"[place-skill] <MythicSkills名称>"
#"[rclick-skill] <MythicSkills名称>"
#"[bowhit-skill] <MythicSkills名称>"
#"[js] <JavaScript文件名(不带文件后缀)>"
effect:
  "&6[&c&lBUFF&6] &b速度I":
    - "[buff] SPEED:1"
  "&6[&c&lBUFF&6] &b爱心粒子":
    - "[particle] heart"
  "&6[&c&lMythicMobs&6] &b攻击技能宝石":
    - "[attack-skill] test"
  "&6[&c&lMythicMobs&6] &b挖掘技能宝石":
    - "[mine-skill] test2"
  "&6[&c&lMythicMobs&6] &b放置技能宝石":
    - "[place-skill] test2"
  "&6[&c&lMythicMobs&6] &b右键技能宝石":
    - "[rclick-skill] test2"
  "&6[&c&lMythicMobs&6] &b弓技能宝石":
    - "[bowhit-skill] test2"
  "&6[&c&lJavaScript&6] &b脚本宝石":
    - "[js] example"
#NBT Effect
nbteffect:
  "heart":
    - "[particle] heart"

#Buff移除
remove: true
#Buff移除界面标题
title: "&8[&bBUFF移除面板&8]"
#移除Buff宝石lore提示:
removehelp: "&e - 点击移除BUFF"
#移除Buff时 背包空间已满提示
nospace: "&c背包空间不足 无法移除BUFF"
#上一页按钮
backpage: "&f上一页"
#下一页按钮
nextpage: "&f下一页"
#移除BUFF收费
payment:
  #是否开启
  enable: false
  #金额
  cost: 1000.0
  #货币种类(money = 游戏币 ; point = 点券)
  mode: money
  #余额不足提示
  error: "&c余额不足低于 %cost% 无法进行该操作"
  #完成提示
  passed: "&a成功支付%cost% 游戏币，拆卸完成！"
#药水循环时间
bufftime: 10
#镶嵌限制(-1为不限制)
limit: -1
#超过限制提示
maxinstalled: "&c已超过限制的镶嵌数量 无法镶嵌"
#镶嵌台类型
workspace: WORKBENCH
#跳过白名单提示物品
#物品表内的物品不会提示不是白名单
bypass:
  - "PLAYER_HEAD"
  - "SKULL_ITEM"

#是否异步处理JavaScript
jsasync: true
#配置版本(不要修改)
config-version: "1.3.0"
```

<br />

## 重要解析

- gem: 配置镶嵌宝石识别lore和需要镶嵌的(nbt/lore)
- whitelist: 配置可镶嵌物品
- effect: 配置BUFF效果识别lore和对应给予的药水效果
- nbteffect: 使用nbt识别 其它功能同effect
- config-version: 配置文件版本 通常与插件版本对应(请勿修改)

<br />

## 下一页

恭喜你 你已经完成了配置 步骤 快去学习镶嵌吧
[镶嵌帮助](GEM.md)

<br />

