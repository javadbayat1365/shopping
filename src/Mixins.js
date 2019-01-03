const Mixins=
{
    log:{
        success: function(message){console.log('%c '+message,'color: #27ae60');
        },
        error: function(message){console.log('%c '+message,'color: #c0392b');
        }
    }
}

export default Mixins;