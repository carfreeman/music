export default {
    formatTime(time) {
        //si el calculo da como resultado indefinido o nan
        //se establecera en 0
        const minutes = Math.floor(time / 60) || 0
        const seconds = Math.round((time - minutes * 60) || 0)

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
}