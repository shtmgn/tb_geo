/* Custom directive for detecting click outside of element */
/*Vue.directive('click-outside', {
	bind: function (el, binding, vnode) {
		this.event = function (event) {
		if (!(el == event.target || el.contains(event.target))) {
			vnode.context[binding.expression](event);
		}
	};
	document.body.addEventListener('click', this.event)
	},
	unbind: function (el) {
		document.body.removeEventListener('click', this.event)
	},
});
	*/
Vue.component('mission', {
	data: function () {
		return {
		isMobile: false,
		squads: [
			{
				name: 'Sith Empire',
				toons: ['darth_revan', 'bastila_shan', 'hk_47', 'marauder', 'darth_malak']
			},
			{
				name: 'First Order',
				toons: ['kailo_ren_unmasked', 'kailo_ren_masked', 'executor', 'officer', 'trooper'],
			},
			'Bounty Hunters',				//2
			'Emperor Palpatine (zeta)',		//3
			'Night Sisters',				//4
			'Triumvirate',					//5
			'Separatist Droids',
			{
				name: 'Geonosians',
				toons: ['geonosian_brood_alfa', 'geonosian_soldier', 'geonosian_spy', 'poggle_the_lesser', 'sun_fac']

			},			
			'Nute Gunray(L) B1 Battle Droid B2 Super Battle Droid Droideka Magnaguard',	//8
			'Dooku(L) + Asajj Ventress'		//9

		],
		enemies: [
			'Mace Windu (anti Jango)',						//0
			'CT-5555 "Fives" (anti Sion, NS, Wat Tambor)',	//1
			'Clone Commander (anti Darth Revan)',			//2
			'Padawan Anakin',								//3
			'ARC Trooper',									//4
			'CT-7567 "Rex"',								//5
			'Shaak-Ti',										//6
			'CC-2224 "Cody"',								//7
			'Ki-Adi Mundi',									//8
			'General Kenobi',								//9
			'Clone Trooper Medic',							//10
			'Padme Amidala',								//11
			'Grand Master Yoda',							//12

		],
		missions: [{
			id: 0,
			name: 'c1',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [0,1,2,3],
			dangerousEnemies: [1]
			},	{
			id: 1,
			name: 'c2',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [7],
			dangerousEnemies: [1]
			}, {
			id: 2,
			name: 'c3',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2]
			},
			{
			id: 3,
			name: 'c4',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 187 500',
				'Wave 2: 297 500',
				'Wave 3: 500 000',
				'Wave 4: 792 000'
				],
			preferredSquads: [1,3,4,5],
			dangerousEnemies: [0, 2]
			},
			{
			id: 4,
			name: 'c5',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 825 000',
				],
			}, 
			{
			id: 5,
			name: 'c6',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 1 072 500',
				],
			}, 
			{
			id: 6,
			name: 'c7',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [1, 2, 3, 5],
			dangerousEnemies: [1, 2]
			},
			{id: 7,
			name: 'c8',
			type: 'req',
			position: 'right',
			rewards: [
				'Wave 1: 351 000',
				'Wave 2: 546 000',
				'Wave 3: 920 400',
				'Wave 4: 1 404 000'
				],
			preferredSquads: [9],
			},
			{
			id: 8,
			name: 'c9',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [1, 2, 3, 5],
			dangerousEnemies: [1, 2]
			},
			{
			id: 9,
			name: 'c10',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [0, 3, 4, 5, 6],
			dangerousEnemies: [0]
			},
			{
			id: 10,
			name: 'c11',
			type: 'usual',
			position: 'right',
			rewards: [
				'Wave 1: 270 000',
				'Wave 2: 420 000',
				'Wave 3: 708 000',
				'Wave 4: 1 080 000'
				],
			preferredSquads: [0, 3, 4, 5, 6],
			dangerousEnemies: [0]
			},
			{
			id: 11,
			name: 'c12',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 1 665 000',
				],
			},
			{
			id: 12,
			name: 'c13',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 2 164 500',
				],
			},
			{id: 13,
			name: 'c14',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [3, 4, 5],
			dangerousEnemies: [2]
			},
			{
			id: 14,
			name: 'c15',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			},
			{
			id: 15,
			name: 'c16',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2]},
			{
			id: 16,
			name: 'c17',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 336 000',
				'Wave 2: 540 000',
				'Wave 3: 910 000',
				'Wave 4: 1 352 000'
				],
			preferredSquads: [0, 1, 2 , 3],
			dangerousEnemies: [1, 2]
			},
			{
			id: 17,
			name: 'c18',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 2 530 000',
				],
			},
			{
			id: 18,
			name: 'c19',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				],
			preferredSquads: [3, 4, 5, 6, 7],
			dangerousEnemies: []
			},
			{id: 19,
			name: 'c20',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 405 000',
				],
			preferredSquads: [3, 4, 5, 6, 7],
			dangerousEnemies: []
			},
			{
			id: 20,
			name: 'c21',
			type: 'req',
			position: 'left',
			rewards: [
				'Wave 1: 1 350 050',
				'Wave 2: 2 033 200',
				],
			},
			{
			id: 21,
			name: 'c22',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 675 000',
				'Wave 2: 1 038 500',
				'Wave 3: 1 564 000',
				],
			preferredSquads: [0, 1, 2, 3, 5],
			dangerousEnemies: [1]
			},
			{
			id: 22,
			name: 'c23',
			type: 'usual',
			position: 'left',
			rewards: [
				'Wave 1: 675 000',
				'Wave 2: 1 038 500',
				'Wave 3: 1 564 000',
				],
			preferredSquads: [0, 1, 2, 3, 5],
			dangerousEnemies: [1]
			},
			{
			id: 23,
			name: 's1',
			type: 'special',
			position: 'right',
			rewards: [
				'15 GET2',
				],
			preferredSquads: [8]
			},
			{
			id: 24,
			name: 's2',
			type: 'special',
			position: 'right',
			rewards: [
				'20 GET2',
				],
			},
			{
			id: 25,
			name: 's3',
			type: 'special',
			position: 'left',
			rewards: [
				'40 GET2',
				],
			},
			{
			id: 26,
			name: 's4',
			type: 'special',
			position: 'left',
			rewards: [
				'1 Wat Tambor Shard',
				],
			},
			{id: 27, name: 't1', type: 'platoon', position: 'right'},
			{id: 28, name: 'b1', type: 'platoon', position: 'right'},
			{id: 29, name: 't2', type: 'platoon', position: 'right'},
			{id: 30, name: 'm2', type: 'platoon', position: 'right'},
			{id: 31, name: 'b2', type: 'platoon', position: 'right'},
			{id: 32, name: 't3', type: 'platoon', position: 'left'},
			{id: 33, name: 'm3', type: 'platoon', position: 'left'},
			{id: 34, name: 'b3', type: 'platoon', position: 'left'},
			{id: 35, name: 't4', type: 'platoon', position: 'left'},
			{id: 36, name: 'm4', type: 'platoon', position: 'left'},
			{id: 37, name: 'b4', type: 'platoon', position: 'left'}
		],
		selectedMission: '',
		seen: false,
		hide: function() {
			this.seen = false;
		}
	}
	},
	template: '#mission',
	methods: {
		mq () {
			this.isMobile = window.matchMedia('(max-width: 600px)').matches;
		},
		
	}
})

let app = new Vue({
	el: '#app',
	data: {
	},
});
