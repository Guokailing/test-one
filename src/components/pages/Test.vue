<template>
  <div id="Test">
    <a-table :columns="columns" :data-source="tableData" :rowKey="(record)=>record.id" :customRow="customRow"></a-table>
    <!-- <div v-for="(item,index) in tableData" :key="index" @click="changName(item)">{{item.nameObj.name}}</div> -->
    <a-progress :percent="percentCount" />

    <div @click="parentClick()">
        <span @click.stop="childClick()">子节点</span>
        <span >子节点2</span>
    </div>
  </div>
</template>
<script>
const tableData = [{
  id: '1',
  sort: '1',
  name: "小明"
}, {
  id: '2',
  sort: '2',
  name: "小明2"
}, {
  id: '3',
  sort: '3',
  name: "小明3"
},
{
  id: '4',
  sort: '4',
  name: "小明4"
}
]
const columns = [
  { title: 'Index', dataIndex: 'sort', width: 150 },
  { title: 'name', dataIndex: 'name', width: 150 },
];
export default {
  name: "Test",
  data() {
    return {
      tableData,
      columns,
      oldIndex: "",
      newIndex: "",
      percentCount: 30,
      JGObj:{
          a:1,
          b:2,
          c:3
      }

    }
  },

  mounted() {
    let timer = setTimeout(() => {
      this.percentCount = 100
    }, 1000);

    let {c:a1}=this.JGObj || {};
    console.log('---a1-----',a1)
  },
  methods: {
    sortList(list, o, n) {
      var newTableData = list
      var data = newTableData.splice(o, 1, null)
      newTableData.splice(o < n ? n + 1 : n, 0, data[0])
      newTableData.splice(o > n ? o + 1 : o, 1)
      return newTableData
    },
    /**
     * 对数据排序并更新 table， 要求 o（oldIndex） 和 n（newIndex） 从 0开始
     */
    sortListAndUpdate(list, o, n) {
      var newTableData = this.sortList(list, o, n)
      newTableData.forEach((item, index) => {
        item.sort = index + 1
      })
      this.$nextTick(() => {
        this.tableData = newTableData
        // that.$refs.table2 && this.$refs.table2.refresh(true)
      })
    },
    // 拖动排序
    customRow(record, index) {
      return {
        // FIXME: draggable： true 不生效还不晓得是什么原因，先使用鼠标移入事件设置目标行的draggable属性
        props: {
          // draggable: 'true'
        },
        style: {
          cursor: 'pointer'
        },
        on: {
          // 鼠标移入
          mouseenter: (event) => {
            // 兼容IE
            var ev = event || window.event
            ev.target.draggable = true
          },
          // 开始拖拽
          dragstart: (event) => {
            // 兼容IE
            var ev = event || window.event
            // 阻止冒泡
            ev.stopPropagation()
            // 得到源目标数据
            this.oldIndex = index
            console.log('----old-----', this.oldIndex)
          },
          // 拖动元素经过的元素
          dragover: (event) => {
            // 兼容 IE
            var ev = event || window.event
            // 阻止默认行为
            ev.preventDefault()
          },
          // 鼠标松开
          drop: (event) => {
            // 兼容IE
            var ev = event || window.event
            // 阻止冒泡
            ev.stopPropagation()
            // 得到目标数据
            this.newIndex = index
            this.sortListAndUpdate(this.tableData, this.oldIndex, this.newIndex)
            console.log('----new-----', this.newIndex)
          }
        }
      }
    },

    // 子节点点击
    childClick(){
        console.log('子节点点击')
    },
    parentClick(){
         console.log('父节点点击')
    }
  }

}
</script>