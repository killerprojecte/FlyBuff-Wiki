# 镶嵌指南

## 开始

- 看到这里 说明你已经看完了配置指南
- 你现在对配置已经稍有理解了吧
- 让我们开始 镶嵌教学

### 准备：你需要一个Lore编辑工具 如： Essentials，CMI，Lores 等

- 我们以Essentials为例 展开教学

<br />

## 配置

### 镶嵌配置

  ```
    gem:
       "&f演示BUFF": "[lore] &f演示效果"
       "&fNBT演示BUFF": "[nbt] testbuff"
  ```

### 效果配置

  ```
    effect:
      "&f演示效果":
        - "[buff] SPEED:1"
    nbteffet:
      "testbuff":
        - "[buff] SPEED:1"
  ```

<br />

## 开始！

从背包内拿出一个物品（没有硬性规定）

- (Essentials指令 其它的自行修改)输入命令 /lore add &f演示BUFF
- 此处"&f演示BUFF"为上面“镶嵌配置”的镶嵌识别lore
  
放置一个工作台(可使用/workbench 打开的)

- 将一个钻石剑（默认白名单物品）放入工作台内
- 使用已设置好的镶嵌宝石点击钻石剑
- 这时应该会提示 “强化成功” 如果没有请前往[帮助](HELP.md)

将已镶嵌的钻石剑放至主手 就会看到在“效果配置”内设置的药水效果已出现在玩家上

<br />

## 下一页

恭喜你 你已经完成了镶嵌 步骤 快去学习BUFF移除吧
[BUFF移除帮助](REMOVE.md)

<br />

