const internals = {
  /**
   * Variable
   */
  $this: $('.mod-slider'),
  /**
   * Function
   */
  addSlick(){
    this.$this.find('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true
    })
  }
}

const SliderDemo = (() => {
  if (internals.$this.length) {
    internals.addSlick()
  }
})()
export default SliderDemo
