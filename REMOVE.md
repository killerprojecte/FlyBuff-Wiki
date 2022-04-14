# BUFF移除指南

## 开始

- 恭喜你完成了镶嵌教学
- 现在我们开始BUFF移除教学

<br />

## 准备

- 设置items.yml
  ```
  gems:
  #此处填药水效果ID
  "&f演示效果":
    #mode:
    ##make -- 新建物品(不支持NBT)
    ##stack -- 使用ItemStack生成(支持NBT) [使用 /buffitem <名称> 保存 不支持输入lore请手动修改]
    mode: make
    #物品名称
    display: "&7演示移除药水"
    #物品lore
    lores:
      - "&f演示BUFF"
    #物品TYPE
    type: PLAYER_HEAD
    #头颅材质(仅支持PLAYER_HEAD或SKULL_ITEM使用)
    texture: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTAzMjdmYjM0MzE5Zjg5YWM1YWI0OGI0ZDc5MjUxZjEzZjA2N2ViZWE3ZGE1Zjg4Yjc1ZjQ3OWE3Mzg5OTI0ZSJ9fX0="
  ```
- 重载配置

<br />

## 移除

准备好上述配置后

我们开始吧

- 将上次使用的已镶嵌效果的钻石剑放至主手
- 输入命令 /buffremove
- 这时你会看见一个GUI界面 第一格有一颗宝石
- 点击该宝石 钻石剑上的BUFF就被拆除了
- 被点击的宝石也发放到了你的背包内

<br />

## 下一页

恭喜你 你已经完成了BUFF移除教学 步骤 快去查看插件更新注意事项吧
[更新帮助](UPDATE.md)

<br />

