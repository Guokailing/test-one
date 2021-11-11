const dialog = {
    data: {
        show: 'false',
        type: 'message',
        message:'',
        confirmCallBack: () => {}
    },
    /** 提示框 **/
    tip: function(message, confirmCallBack) {
        this.data.show = true
        this.data.type = 'tip'
        this.data.message = message
        setTimeout(() => {
            this.data.show = false
            if (confirmCallBack != undefined) {
                confirmCallBack()
            }
        }, 1000)
    },
}
export {dialog}
