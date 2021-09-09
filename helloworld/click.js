// click('稍后再')
// click('暂不')
// home()
// scrollDown()
// setText(1,'')
// setText('')
// input('')

var sendButton = text("我的").findOne().parent().parent();
sendButton.click();
console.log(sendButton.boundsInScreen(),'----->');
console.log(sendButton.clickable());