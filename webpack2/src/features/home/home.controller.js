export default class HomeController{
  constructor(randomNames){
    this.random=randomNames
    console.log('this.random is', this.random);
    this.name="World";
  }
  changeName(){
    this.name="Mars";
  }
  randomName(){
    this.name = this.random.getName()
  }
}

HomeController.$inject = ['randomNames']
