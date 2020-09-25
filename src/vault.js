//----------------------------WHETSTONE RELEVANT----------------------------//
Hooks.once('WhetstoneReady', () => {
	console.log('Whetstone | Ready');
//Registering Vault Theme in Whetstone
	game.Whetstone.themes.register('Whetstone', {
		id: 'Vault',
		name: 'Vault',
		title: 'Vault',
		description: 'Vault',
		version: '1.0.0',
		img: '/modules/s-themes/assets/vault/vaulticon.jpg',
		preview: '',
		authors: [{ 
			name: 'Parker S.',
			contact: 'Github',
			url: 'https://github.com/sparkcity'
		}],
		styles: [
            '/modules/s-themes/styles/vault/vault.css'
        ],
		substyles: {},
		variables: [],
		presets: {},
		dialog: '',
		config: '',
		dependencies: {},
		systems: {
            core: '0.6.6',
            'dnd5e': '0.96'
        },
		compatible: {
        },
		conflicts: {
            
        }
	});

	game.Whetstone.settings.registerMenu('Vault', 'Vault', {
		name: game.i18n.localize('WHETSTONE.Config'),
		label: game.i18n.localize('WHETSTONE.ConfigTitle'),
		hint: game.i18n.localize('WHETSTONE.ConfigHint'),
		icon: 'fas fa-paint-brush',
		restricted: false
	});
});