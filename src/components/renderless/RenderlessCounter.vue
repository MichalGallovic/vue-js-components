<script>
export default {
	data () {
		return {
			counter: 0
		}
	},
	methods: {
		increment () { this.counter++; },
		decrement () { this.counter--; }
	},
	render () {
		return this.$scopedSlots.default({
			counter: this.counter,
			increment: this.increment,
			decrement: this.decrement
		});
	}
}
</script>

