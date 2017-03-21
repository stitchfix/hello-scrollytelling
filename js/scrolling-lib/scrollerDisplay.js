
// from Jim Vallandingham's scrollytelling with D3 code, with minor tweaks
// https://github.com/vlandham/scroll_demo/blob/gh-pages/js/sections.js
// (in particular, see lines 765-793)


function scrollerDisplay(container, stepClass, activateFunctions, updateFunctions) {

  var lastIndex = -1
  var activeIndex = 0

  var scroll = scroller()
    .container(container)

  scroll(d3.selectAll('.' + stepClass))

  scroll.on('active', function(index) {

    activeIndex = index
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign)
    scrolledSections.forEach(function(i) {
      activateFunctions[i]()
    })
    lastIndex = activeIndex

    d3.selectAll('.' + stepClass)
      .attr('class', function(d,i) {
          return (i == index) ? stepClass + ' highlighted-step' : stepClass
        })

  })

  scroll.on('progress', function(index, progress){
    updateFunctions[index](progress)
  })

}
