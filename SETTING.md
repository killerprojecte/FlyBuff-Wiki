# 配置指南

## 配置文件预览
```
#BUFF宝石
#格式: "宝石识别lore": "BUFF效果识别lore"
gem:
  "&b&l速度I": "&6[&c&lBUFF&6] &b速度I"
#可镶嵌白名单
whitelist:
  - "DIAMOND_SWORD"
  - "DIAMOND_AXE"
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
#  - "药水ID:等级"
#药水ID可前往 https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html 查看
#等级最高仅支持1-255 (原版限制)
effect:
  "&6[&c&lBUFF&6] &b速度I":
    - "SPEED:1"

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
#配置版本(不要修改)
config-version: "1.1.0"
```

<br />

## 重要解析

- gem: 配置镶嵌宝石识别lore和需要镶嵌的lore
- whitelist: 配置可镶嵌物品
- effect: 配置BUFF效果识别lore和对应给予的药水效果
- config-version: 配置文件版本 通常与插件版本对应(请勿修改)

<br />

## 下一页

恭喜你 你已经完成了配置 步骤 快去学习镶嵌吧
[镶嵌帮助](GEM.md)

<br />

