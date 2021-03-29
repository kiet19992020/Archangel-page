const $this = $('.mod-content-protect')
const init = () => {
  $this.each((index, el) => {
    console.log(el, index)
  })
}

const ModContentProtect = (() => {
  if ($this.length) {
    init()
  }
})()
export default ModContentProtect
