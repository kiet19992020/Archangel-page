const internals = {
  /**
   * Variable
   */
  $this: $('.mod-content-proetect'),
  /**
   * Function
   */
  addSlick() {
    this.$this.find('.protect-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev arrows"><span class="icomoon h1 icon-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="slick-next arrows"><span class="icomoon h1 icon-chevron-right"></span></button>'
    })
  }
}

const slideProtect = (() => {
  if (internals.$this.length) {
    internals.addSlick()
  }
})()
export default slideProtect
