const $this = $('.mod-content-about')

const init = () => {
  $this.find('.is-show .about-slide').show()
}

const bindEvent = () => {
  $('.show').on('click', function () {
    const targetClass = $(this).data('target')
    const target = $(`.${targetClass}`)
    $(this).toggleClass('active').siblings().removeClass('active')
    $('.about-main ').removeClass('is-show')
    target.addClass('is-show')
  })

  $('.show-mb').on('click', (e) => {
    const parent = $(e.currentTarget).parents('.about-main ')
    const content = parent.find('.about-slide')

    if (parent.hasClass('is-show')) {
      parent.removeClass('is-show')
      content.slideUp()
    } else {
      const prArr = $('.about-main').not(parent)
      prArr.find('.about-slide').slideUp()
      parent.toggleClass('is-show').siblings().removeClass('is-show')
      content.slideToggle('fast')
    }
  })
}

const ModAboutContent = (() => {
  if ($this.length) {
    init()
    bindEvent()
  }
})()
export default ModAboutContent
