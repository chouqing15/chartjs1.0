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
        var max = Math.max.apply(null,arr);
        [1,2,3,4,5,6,7].forEach(function (item,i){
            ctx.beginPath();
            ctx.moveTo(60 + i * (column.width - 60) / 7,column.height - 60);
            ctx.lineTo(60 + i * (column.width - 60) / 7,column.height - 30  - ((column.height - 50) * (arr[i] / max)));
            console.log(60 + i * (column.width - 60) / 7,column.height - 60,'moveTo')
            console.log(60 + i * (column.width - 60) / 7,column.height - 100  - ((column.height - 50) * (arr[i] / max)))
            ctx.lineWidth = 20;
            ctx.lineCap = 'round';
            var grd = ctx.createLinearGradient(60 + i * (column.width - 60) / 7,column.height - 45,60 + i * (column.width - 60) / 7,column.height - 50  - ((column.height - 50) * (arr[i] / 500))); //grd定义为描边渐变样式;
            grd.addColorStop(0, 'orange');
            grd.addColorStop(1, 'blue');
            ctx.strokeStyle = grd;
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
