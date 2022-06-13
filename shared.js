
document.addEventListener('click', e => {

  const $el = e.target

  // console.log($el.classList)

  // if ($el.classList.contains('nav-group-a-top')) {
  //   $el.parentElement.classList.toggle('expand')
  // }

})

document.querySelectorAll('.nav-group-a').forEach(el => {
  el.addEventListener('click', e => {
    e.currentTarget.classList.toggle('expand')
  })
})

document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', e => {
    clear_active(el)
    handle_subnav(e.currentTarget.dataset.subId)
    e.currentTarget.classList.toggle('active')
    document.querySelector('.nav-sub.expand .nav-sub-item').click()
    e.stopPropagation()
  })
})

document.querySelectorAll('.nav-item-parent').forEach(el => {
  el.addEventListener('click', e => {
    e.stopPropagation()
    if (el.parentElement.classList.contains('expand')) {
      // already expanded, do nothing
      return false
    } else {
      // clear active, expand, click first child
      clear_active(el)
      el.parentElement.classList.toggle('expand')
      el.nextElementSibling.click()
    }
  })
})

document.querySelectorAll('.nav-sub-item').forEach(el => {
  el.addEventListener('click', e => {
    clear_active_sub(el)
    handle_page(e.currentTarget.dataset.page)
    e.currentTarget.classList.toggle('active')
  })
})

function clear_active(el) {
  const expandedParent = document.querySelector('.nav-group-b.expand')
  if (expandedParent && expandedParent !== el.parentElement) {
    expandedParent.classList.remove('expand')
  }
  document.querySelectorAll('.nav-item, .nav-item-parent').forEach(el => {
    el.classList.remove('active')
  })
}

function clear_active_sub(el) {
  document.querySelectorAll('.nav-sub-item').forEach(el => {
    el.classList.remove('active')
  })
}

function handle_subnav(id) {
  document.querySelectorAll('.nav-sub').forEach(el => {
    el.classList.remove('expand')
  })
  document.querySelector('#'+ id).classList.add('expand')
}

function handle_page(url) {
  document.querySelector('iframe').src = 'https://master.configureonedemo.com/'+ url
}