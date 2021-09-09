// "ui";
// ui.layout(
//     <horizontal>
//         <button text="hahaha" id="demo"/>
//         <button text="hahaha1"/>
//     </horizontal>
// );
// ui.demo.click(()=>{
//     alert(1)
// })
var w = floaty.window(
    <frame gravity="center">
        <text id="text">悬浮文字</text>
    </frame>
);
setTimeout(()=>{
    w.close();
}, 2000);
// function func1(){
//     alert(11)
// }