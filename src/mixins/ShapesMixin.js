export const ShapesMixin = {
	name: "ShapesMixin",
	data: function () {
		return {
			shapes: {
				mickey: require('../assets/Form_Mickey.svg'),
				lara: require('../assets/Form_Lara.svg'),
				paula: require('../assets/Form_Paula.svg'),
				monika: require('../assets/Form_Paula.svg'),
				sarafina: require('../assets/Form_Mickey.svg'),
				sunny: require('../assets/Form_Lara.svg'),
			}
		}
	},
	methods: {
		getShapeById(id) {
			switch (id) {
				case "10":
					return this.shapes.sarafina
				case "9":
					return this.shapes.monika
				case "11":
					return this.shapes.sunny
			}
		}
	}
}
