<template>
    <div>
      <!--comment-->
        <div class="container">
            <div class="table-one-div">
            <table cellspacing="0">
                <tr>
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                </tr>
            </table>
        </div>

        <div class="table-two-div" style="overflow:auto">
            <table cellspacing="0" >
                <tr v-for="(n, index) in 10" :key="index" >
                    <td>A</td>
                    <td>B</td>
                    <td>C</td>
                    <td>D</td>
                </tr>
            </table>
        </div>
        </div>
        <!-- <table cellspacing="0" cellpadding="0" border="0" width="325">
  <tr>
    <td>
       <table cellspacing="0" cellpadding="1" border="1" width="300" >
         <tr style="color:white;background-color:grey">
            <th>Header 1</th>
            <th>Header 2</th>
         </tr>
       </table>
    </td>
  </tr>
  <tr>
    <td>
       <div style="width:320px; height:80px; overflow:auto;">
         <table cellspacing="0" cellpadding="1" border="1" width="300" >
           <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
           <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
              <tr>
             <td>new item</td>
             <td>new item</td>
           </tr>
         </table>  
       </div>
    </td>
  </tr>
</table> -->
    </div>
</template>

<style scoped>

    .container {
        position: relative;
    }

    table {
        width: 100%;
        
    }

    .table-one-div {
        width: 100%;
        top: 0;
    }

    td {
        background-color: orange;
        height: 100px;
    }

    .table-two-div {
        height: 200px;
    }

    .table-two-div td {
        background-color: lightgreen;
    }
</style>