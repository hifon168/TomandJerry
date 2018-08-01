function Dog(name) {
    this.name=name;
    this.bite=function(otherDog){
        console.log(this.name+'咬了'+otherDog.name)
    }
}
var tom=new Dog('Tom')
var jerry=new Dog('Jerry')
tom.bite(jerry)
jerry.bite.call(tom,tom)
tom.bite.apply(tom,[tom])


// 你先写个程序吧，里面定义一个叫做 Dog 的类，构造函数里传入狗的名字，
// 成员函数有个bite，参数为别的狗，调用会打印“xx咬了xx”。
// 然后 new Dog("Tom"), new Dog("Jerry")，再让Tom咬Jerry。
// 文件写完放到github上，把地址发给我，我再给下一步指示。

// 调用 jerry.bite 打印 Tom咬了Tom
