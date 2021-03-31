const $this = $('.mod-content-about')

const init = () => {
  // $('.row_p').hide()
  // $('.row-p1').show()
}

const bindEvent = () => {
  $('.show').on('click', function () {
    const targetClass = $(this).data('target')
    const target = $(`.${targetClass}`)
    $(this).toggleClass('active').siblings().removeClass('active')
    $('.about-main ').removeClass('is-show')
    target.addClass('is-show')
    // target.show()
    // $('.row_p').not(target).hide()
  })
  $('.show-mb').on('click', (e) => {
    const parent = $(e.currentTarget).parents('.about-main ')
    const content = parent.find('.about-slide')
    if (parent.hasClass('is-show')) {
      parent.removeClass('is-show')
      content.slideUp()
    } else {
      $('.about-slide ').slideUp().removeClass('is-show')
      parent.addClass('is-show')
      content.slideDown()
    }
  })

  // $('.show_mb').on('click', function () {
  //   $(this).toggleClass('active').siblings().removeClass('active')
  //   const row = $(this).children('.row-p-mb')
  //   console.log(row)
  //   $('.row-p-mb').not(row).slideUp()
  //   row.slideToggle('fast')
  // })
}

const ModAboutContent = (() => {
  if ($this.length) {
    init()
    bindEvent()
  }
})()
export default ModAboutContent
