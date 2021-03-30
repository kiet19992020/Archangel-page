const $this = $('.mod-content-about')

const init = () => {
  $('.row_p').hide()
  $('.row-p1').show()
}

const bindEvent = () => {
  $('.show').on('click', function () {
    const targetClass = $(this).data('target')
    const target = $(`.${targetClass}`)
    $(this).toggleClass('active').siblings().removeClass('active')
    target.show()
    $('.row_p').not(target).hide()
  })
}

const ModAboutContent = (() => {
  if ($this.length) {
    init()
    bindEvent()
  }
})()
export default ModAboutContent
