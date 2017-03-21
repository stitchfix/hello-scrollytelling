
// highlights the specified groups and turns everything else off
function highlight_svg_groups(group_names) {

  d3.select("#vis").select("svg").selectAll("svg > g")
    .transition().duration(0)
      .attr("display", function(){
          if (group_names.indexOf(this.id) > -1) {
            return "block"
          } else {
            return "none"
          }
        })
      .style("opacity",function(){
          if (group_names.indexOf(this.id) > -1) {
            return 1
          } else {
            return 1e-6
          }
        })

}

// stops animation and keeps track of the overall animation state
function stop_animation_timer(timer_name){

  if (animation_state[timer_name] != false){
    animation_state[timer_name].stop()
  }
  animation_state[timer_name] = false

}
