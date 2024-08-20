const q = document.querySelectorAll.bind(document),
  g = document.getElementById.bind(document)

g('toggle-shrink').addEventListener('click', e => {
  g('nav-first').classList.toggle('shrink')
})

q('.nav-item-group .nav-item').forEach(el => {
  el.addEventListener('click', e => {
    document.querySelector('.nav-item.active').classList.remove('active')
    el.classList.toggle('active')
    document.querySelectorAll('.nav-sub').forEach(el => {
      el.classList.remove('expand')
    })
    document.querySelector('#'+ el.dataset.subId).classList.add('expand')
  })
})