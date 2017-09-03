
<template>
  <div class="box">
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
export default {
    mounted:function (){
      var ctx = this.$refs.canvas.getContext('2d');
      var myLineChart = new Chart(ctx).Line({
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
            {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(0,0,0,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
            },
            ]
            }, {
              scaleShowGridLines:false,
              datasetStrokeWidth:10  ,
              pointDotStrokeWidth:1,
              scaleShowLabels:false  ,
              scaleStepWidth:0,
              scaleSteps:null,
            });
    }
}
</script>

<style>

</style>
