# Layout-Element(beta)

一套布局组件，灵感来自 flutter，可以按照组件同名去 flutter 搜索相同的组件。

## Motivation

在 `react-icecream` 的背景下，我们的业务代码已经很少需要写样式了，而我们的大部分工作是处理布局和实现逻辑。然而目前的工作方式却需要我们用一个不够语义化的 div 书写布局，搭配以 "style.less" 赋予其意义(大部分是布局)，是比较增加心智负担的写法。

本组件尝试一种新的写法，让我们业务仔回归初心，专心处理布局和实现逻辑。

## Design

效仿 flutter 的设计，我们把 `style` 拆分成 3 个部分, 分别是：布局，约束和样式。

### 布局(Layout)

https://flutter.dev/docs/development/ui/layout

目前从 `style` 拆分出来的布局属性有：display，margin，padding，overflow等等，具体需要参考 `IContainer`。

### 约束(Constraint)

只有 4 个属性 `max-width`, `max-height`, `min-width`, `min-height`。约束组件未实现，可作为样式使用。

### 样式(Style)

字体大小，字体颜色，背景色等等。
