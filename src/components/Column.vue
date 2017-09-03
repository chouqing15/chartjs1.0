<template>
  <div class="column">
      <canvas id="column" ref="column"></canvas>
  </div>
</template>

<script>
export default {
    mounted:function (){
        var column = this.$refs.column;
        var ctx = column.getContext('2d');
        var self = this;
        column.width = column.parentNode.offsetWidth;
        column.height = column.parentNode.offsetHeight;
        this.line(ctx,20,20,20,column.height - 30)
        this.line(ctx,20,column.height - 30,column.width,column.height - 30);
        var arr = [20,40,10,100,50,80,230];
        [1,2,3,4,5,6,7].forEach(function (item,i){
            ctx.beginPath();
            ctx.moveTo(60 + i * (column.width - 60) / 7,column.height - 45);
            ctx.lineTo(60 + i * (column.width - 60) / 7,(column.height - 30) * (arr[i] / 500));
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'orange'
            ctx.stroke();
            self.write(ctx,(i+1),'block',60 + i * (column.width - 60) / 7, column.height - 10)
        })
    },
    methods:{
        line:function (ctx,fx,fy,ex,ey){
            ctx.beginPath();
            ctx.moveTo(fx,fy);
            ctx.lineTo(ex,ey);
            ctx.stroke();
        },
        write:function (mycanvas,start,color,ox,oy){
            mycanvas.beginPath();
            mycanvas.fillStyle = color;
            mycanvas.fillText(start,ox,oy);
            mycanvas.closePath();
        }
    }
}
</script>

<style>
    .column{
        width: 80%;
        margin: 0 auto;
        height:200px;
    }
</style>
