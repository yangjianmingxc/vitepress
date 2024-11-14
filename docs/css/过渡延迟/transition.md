## 基础知识

默认情况下css属性的变化都是瞬间完成的（其实也有时间只是毫秒级的，人眼很难感知到），可以使用transition来让变化变的顺滑。

值得注意的是，不是所有的css属性都有过渡效果，[[查看支持动画的 CSS 属性](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) ]()，一般来讲中间值属性都可以设置动画如宽高，透明度等

## 案例分析

下面例子中边框的变化是没有中间值的，所以没有过渡效果。但线宽度是数值类型有中间值所以会有过渡效果。

```javascript
<style>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background: #2c3e50;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        padding: 80px;
    }

    main {
        width: 400px;
        height: 400px;
    }

    div {
        width: 150px;
        height: 150px;
        background-color: #fff;
        border: solid 20px #ddd;
        transition: 2s;
    }

    div:hover {
        border-radius: 50%;
        border: dotted 60px #ddd;
        background-color: #e67e22;
    }
</style>

<main>
    <div></div>
</main>
```

## transtion

`transition` 是一个简写属性，用来定义在元素状态变化时的过渡效果。它可以包含多个子属性，通常是：

- `transition-property`：定义哪个 CSS 属性会应用过渡效果，默认值为`all`即所有属性都发生过渡效果，多个属性使用逗号分隔。
- `transition-duration`：定义过渡持续的时间。
- `transition-timing-function`：定义过渡的速度曲线（如 `ease`, `linear`, `ease-in` 等）。
- `transition-delay`：定义延迟开始过渡的时间。







