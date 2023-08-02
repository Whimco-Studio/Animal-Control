interface ReplicatedStorage extends Instance {
	Assets: Folder & {
		Highlight: MeshPart;
		TowerBase: MeshPart & {
			Decal: Decal;
		};
		Gui: Folder & {
			EnemyUI: BillboardGui & {
				Frame: Frame & {
					UIListLayout: UIListLayout;
					Stroke: Frame & {
						UICorner: UICorner;
						UIStroke: UIStroke;
						FillTop: Frame & {
							UICorner: UICorner;
						};
						FillBottom: Frame & {
							UICorner: UICorner;
						};
					};
					UIPadding: UIPadding;
					Label: Frame & {
						TextLabel: TextLabel & {
							UIStroke: UIStroke;
						};
					};
				};
			};
		};
		Units: Folder & {
			PirateCannon: MeshPart;
			MachineGun03: MeshPart;
			MachineGun01: MeshPart;
			Axe02: MeshPart;
			Sword08: MeshPart;
			Sword05: MeshPart;
			Sword06: MeshPart;
			TNTBarrel: MeshPart;
			Cannonball: MeshPart;
			Knife06: MeshPart;
			Bow01: MeshPart;
			Pistol17: MeshPart;
			Sword09: MeshPart;
			Rifle11: MeshPart;
			WoodenSword: MeshPart;
			Rifle13: MeshPart;
			BoneKnife02: MeshPart;
			VikingAxe: MeshPart;
			MachineGun02: MeshPart;
			BombBarrel: MeshPart;
			BoneKnife03: MeshPart;
			BoneKnife01: MeshPart;
			Sword07: MeshPart;
		};
		Particles: Folder & {
			Explosion: Part & {
				Host: Attachment & {
					Stars: ParticleEmitter;
					Implode: ParticleEmitter;
					BoomTest: ParticleEmitter;
					Explode: ParticleEmitter;
					Fire: ParticleEmitter;
					Ring: ParticleEmitter;
					Smoke: ParticleEmitter;
				};
			};
		};
		Cloud: MeshPart;
	};
	Animations: Folder & {
		Goldfish: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Walk: Animation;
			Bounce: Animation;
			Swim: Animation;
			Run: Animation;
			Splash: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Tortoise: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Mice: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Chick: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Fly: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Penguin: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Run: Animation;
			Peck: Animation;
			Roll: Animation;
			Death: Animation;
			Fly: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Cat: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Pigeon: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Fly: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Dog: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Dove: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Run: Animation;
			Bounce: Animation;
			Peck: Animation;
			Roll: Animation;
			Death: Animation;
			Fly: Animation;
			Fall: Animation;
			Clicked: Animation;
			Fear: Animation;
		};
		Rabbit: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Swim: Animation;
			Walk: Animation;
			Run: Animation;
			Roll: Animation;
			Death: Animation;
			Eat: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
		Parrot: Folder & {
			Spin: Animation;
			Idle: Animation;
			Jump: Animation;
			Bounce: Animation;
			Run: Animation;
			Peck: Animation;
			Roll: Animation;
			Death: Animation;
			Fly: Animation;
			Clicked: Animation;
			Fall: Animation;
			Fear: Animation;
		};
	};
	Packages: Folder & {
		_Index: Folder & {
			["sleitnick_table-util@1.2.0"]: Folder & {
				["table-util"]: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
			["sleitnick_timer@1.1.2"]: Folder & {
				timer: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
				Signal: ModuleScript;
			};
			["sleitnick_option@1.0.4"]: Folder & {
				option: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
			["sleitnick_knit@1.4.7"]: Folder & {
				Comm: ModuleScript;
				Promise: ModuleScript;
				knit: ModuleScript & {
					KnitClient: ModuleScript;
					KnitServer: ModuleScript;
				};
			};
			["surnautica_profileservice@1.0.0"]: Folder & {
				profileservice: ModuleScript;
			};
			["sleitnick_signal@1.4.2"]: Folder & {
				signal: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
			["sleitnick_comm@0.3.1"]: Folder & {
				Option: ModuleScript;
				comm: ModuleScript & {
					Types: ModuleScript;
					Client: ModuleScript & {
						ClientComm: ModuleScript;
						ClientRemoteProperty: ModuleScript;
						ClientRemoteSignal: ModuleScript;
					};
					Util: ModuleScript;
					Server: ModuleScript & {
						RemoteSignal: ModuleScript;
						RemoteProperty: ModuleScript;
						ServerComm: ModuleScript;
					};
				};
				Promise: ModuleScript;
				Signal: ModuleScript;
			};
			["evaera_promise@4.0.0"]: Folder & {
				promise: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
			["csqrl_basicstate@0.2.6"]: Folder & {
				basicstate: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
			["sleitnick_input@2.1.1"]: Folder & {
				input: ModuleScript & {
					PreferredInput: ModuleScript;
					Touch: ModuleScript;
					Keyboard: ModuleScript;
					Mouse: ModuleScript;
					Gamepad: ModuleScript;
				};
				Trove: ModuleScript;
				Signal: ModuleScript;
			};
			["sleitnick_trove@0.4.2"]: Folder & {
				trove: ModuleScript & {
					["init.spec"]: ModuleScript;
				};
			};
		};
		Knit: ModuleScript;
		ProfileService: ModuleScript;
		Maid: ModuleScript;
		Signal: ModuleScript;
		Input: ModuleScript;
		Timer: ModuleScript;
		TableUtil: ModuleScript;
		BasicState: ModuleScript;
	};
	Controllers: Folder & {
		RenderController: ModuleScript & {
			VisualEffects: Folder & {
				TowerIdle: ModuleScript;
				TowerCreated: ModuleScript;
				Damage: ModuleScript;
			};
		};
		TemplateController: ModuleScript;
		InterfaceController: ModuleScript;
		PlayerController: ModuleScript;
	};
	State: Folder & {
		Menus: Folder;
		Player: Folder & {
			Server: ModuleScript;
		};
		Game: Folder;
	};
	Config: Folder & {
		Bindables: ModuleScript;
		Quirkymals: Folder & {
			Animations: ModuleScript;
			SkinInfo: ModuleScript;
			Accessories: Folder & {
				Scaling: ModuleScript;
				Positioning: ModuleScript;
				CustomInfo: ModuleScript;
			};
			Skins: ModuleScript;
		};
		Settings: ModuleScript;
		POVs: ModuleScript;
		DataTemplates: ModuleScript;
	};
	Info: Folder & {
		Animations: ModuleScript & {
			Dog: ModuleScript;
			Cat: ModuleScript;
			Dove: ModuleScript;
			Template: ModuleScript;
			Chick: ModuleScript;
		};
	};
	Animals: Folder & {
		Snake: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["neck.01"]: Bone & {
							["neck.02"]: Bone & {
								head: Bone;
							};
						};
						["tail.01"]: Bone & {
							["tail.02"]: Bone & {
								["tail.03"]: Bone;
							};
						};
					};
				};
			};
			InitialPoses: Folder & {
				head_Original: CFrameValue;
				Mesh_Initial: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				head_Initial: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				Mesh_Original: CFrameValue;
				Mesh_Composited: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				head_Composited: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Flamingo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.03"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hornbill: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				root_Original: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Owl: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.02"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Ox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Penguin: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				root_Original: CFrameValue;
				root_Composited: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Cheetah: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Eagle: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Cow: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Ostrich: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Goldfish: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["fin.L"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["fin.R"]: Bone;
						["fin.02"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				Mesh_Composited: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Zebra: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Elephant: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["trunk.01"]: Bone & {
							["trunk.02"]: Bone & {
								["trunk.03"]: Bone & {
									["trunk.04"]: Bone;
								};
							};
						};
						["tail.01"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["trunk.03_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["trunk.03_Initial"]: CFrameValue;
				["trunk.01_Original"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["trunk.02_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["trunk.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["trunk.04_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["trunk.04_Original"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["trunk.03_Original"]: CFrameValue;
				["trunk.01_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["trunk.02_Initial"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["trunk.04_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["trunk.01_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Mice: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Dog: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone & {
							["ear.L.01"]: Bone;
						};
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone & {
							["ear.R.01"]: Bone;
						};
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["ear.L.01_Composited"]: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["ear.R.01_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R.01_Composited"]: CFrameValue;
				["ear.L.01_Initial"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.R.01_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["ear.L.01_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Donkey: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hyena: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Buffalo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Duck: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Fox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Crow: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["wing.R"]: Bone;
						["hair.01"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hog: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		SnowWeasel: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Cat: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Reindeer: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Tortoise: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.F.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Wolf: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		SnowOwl: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.02"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Sheep: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Chicken: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		SeaLion: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["leg.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.L_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.R_Original"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["leg.L_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				root_Original: CFrameValue;
				root_Composited: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rooster: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["tail.03"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.R"]: Bone;
						["feet.R"]: Bone;
						["tail.02"]: Bone;
						["feet.L"]: Bone;
						["wing.L"]: Bone;
						["tail.01"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rhino: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Walrus: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.F.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				body_Original: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Raccoon: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rabbit: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		PolarBear: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.B.L"]: Bone;
						["leg.F.R"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Antelope: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Pigeon: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Chick: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		ArcticFox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Pig: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Dove: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Parrot: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["hair.02_Original"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hippo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
	};
	Modules: Folder & {
		ParticleFX: ModuleScript;
		Feel: ModuleScript & {
			Tween: ModuleScript;
			Camera: ModuleScript & {
				Modes: ModuleScript;
			};
			Library: ModuleScript;
			Spring: ModuleScript;
			Wrap: ModuleScript;
			Particles: ModuleScript;
			Lerp: ModuleScript;
		};
	};
	Classes: Folder & {
		Quirkymal: ModuleScript;
	};
	Interface: Folder & {
		include: Folder & {
			RuntimeLib: ModuleScript;
			Promise: ModuleScript;
			node_modules: Folder & {
				["@rbxts"]: Folder & {
					types: Folder & {
						include: Folder & {
							generated: Folder;
						};
						["package"]: ModuleScript;
					};
					roact: Folder & {
						["package"]: ModuleScript;
						src: ModuleScript & {
							createSpy: ModuleScript;
							createSignal: ModuleScript;
							oneChild: ModuleScript;
							Component: ModuleScript;
							createElement: ModuleScript;
							createReconciler: ModuleScript;
							GlobalConfig: ModuleScript;
							strict: ModuleScript;
							createRef: ModuleScript;
							Type: ModuleScript;
							Portal: ModuleScript;
							Symbol: ModuleScript;
							PropMarkers: Folder & {
								Ref: ModuleScript;
								Change: ModuleScript;
								Children: ModuleScript;
								Event: ModuleScript;
							};
							ComponentLifecyclePhase: ModuleScript;
							Config: ModuleScript;
							assign: ModuleScript;
							assertDeepEqual: ModuleScript;
							getDefaultInstanceProperty: ModuleScript;
							Binding: ModuleScript;
							NoopRenderer: ModuleScript;
							forwardRef: ModuleScript;
							internalAssert: ModuleScript;
							createReconcilerCompat: ModuleScript;
							createFragment: ModuleScript;
							RobloxRenderer: ModuleScript;
							PureComponent: ModuleScript;
							invalidSetStateMessages: ModuleScript;
							ElementKind: ModuleScript;
							createContext: ModuleScript;
							Logging: ModuleScript;
							ElementUtils: ModuleScript;
							SingleEventManager: ModuleScript;
							None: ModuleScript;
						};
					};
					sift: Folder & {
						["package"]: ModuleScript;
						out: ModuleScript & {
							Dictionary: ModuleScript & {
								includes: ModuleScript;
								flip: ModuleScript;
								every: ModuleScript;
								update: ModuleScript;
								equalsDeep: ModuleScript;
								flatten: ModuleScript;
								copy: ModuleScript;
								values: ModuleScript;
								keys: ModuleScript;
								copyDeep: ModuleScript;
								some: ModuleScript;
								freeze: ModuleScript;
								map: ModuleScript;
								removeValue: ModuleScript;
								fromEntries: ModuleScript;
								freezeDeep: ModuleScript;
								set: ModuleScript;
								removeValues: ModuleScript;
								fromArrays: ModuleScript;
								entries: ModuleScript;
								removeKeys: ModuleScript;
								removeKey: ModuleScript;
								count: ModuleScript;
								filter: ModuleScript;
								has: ModuleScript;
								mergeDeep: ModuleScript;
								equals: ModuleScript;
								merge: ModuleScript;
							};
							Set: ModuleScript & {
								map: ModuleScript;
								["delete"]: ModuleScript;
								differenceSymmetric: ModuleScript;
								intersection: ModuleScript;
								fromArray: ModuleScript;
								toArray: ModuleScript;
								isSuperset: ModuleScript;
								merge: ModuleScript;
								copy: ModuleScript;
								count: ModuleScript;
								filter: ModuleScript;
								has: ModuleScript;
								isSubset: ModuleScript;
								difference: ModuleScript;
								add: ModuleScript;
							};
							Types: ModuleScript;
							Array: ModuleScript & {
								last: ModuleScript;
								shuffle: ModuleScript;
								is: ModuleScript;
								concatDeep: ModuleScript;
								update: ModuleScript;
								copy: ModuleScript;
								reduceRight: ModuleScript;
								copyDeep: ModuleScript;
								map: ModuleScript;
								removeValue: ModuleScript;
								equals: ModuleScript;
								first: ModuleScript;
								find: ModuleScript;
								removeIndex: ModuleScript;
								count: ModuleScript;
								reverse: ModuleScript;
								zipAll: ModuleScript;
								includes: ModuleScript;
								removeValues: ModuleScript;
								zip: ModuleScript;
								unshift: ModuleScript;
								toSet: ModuleScript;
								equalsDeep: ModuleScript;
								flatten: ModuleScript;
								splice: ModuleScript;
								sort: ModuleScript;
								difference: ModuleScript;
								freezeDeep: ModuleScript;
								slice: ModuleScript;
								findLast: ModuleScript;
								freeze: ModuleScript;
								findWhere: ModuleScript;
								removeIndices: ModuleScript;
								findWhereLast: ModuleScript;
								shift: ModuleScript;
								pop: ModuleScript;
								set: ModuleScript;
								create: ModuleScript;
								every: ModuleScript;
								at: ModuleScript;
								push: ModuleScript;
								insert: ModuleScript;
								filter: ModuleScript;
								differenceSymmetric: ModuleScript;
								concat: ModuleScript;
								reduce: ModuleScript;
								some: ModuleScript;
							};
							Util: ModuleScript & {
								equalObjects: ModuleScript;
								isEmpty: ModuleScript;
								func: ModuleScript;
							};
							None: ModuleScript;
						};
					};
					services: ModuleScript & {
						["package"]: ModuleScript;
					};
					["roact-rodux-hooked"]: Folder & {
						["package"]: ModuleScript;
						src: ModuleScript & {
							hooks: Folder & {
								useSelector: ModuleScript;
								useDispatch: ModuleScript;
								useStore: ModuleScript;
							};
							utils: Folder & {
								shallowEqual: ModuleScript;
							};
							components: Folder & {
								Context: ModuleScript;
								StoreProvider: ModuleScript;
							};
							vendor: Folder & {
								RoactHooked: ModuleScript;
								Roact: ModuleScript;
							};
						};
					};
					["roact-hooked"]: Folder & {
						["package"]: ModuleScript;
						src: ModuleScript & {
							hoc: ModuleScript;
							Roact: ModuleScript;
							NoYield: ModuleScript;
							withHookDetection: ModuleScript;
							pureComponent: ModuleScript;
							hooks: ModuleScript;
						};
					};
					["compiler-types"]: Folder & {
						["package"]: ModuleScript;
						types: Folder;
					};
					["object-utils"]: ModuleScript & {
						["package"]: ModuleScript;
					};
				};
			};
		};
		StateTemplate: ModuleScript;
		FunctionalTemplate: ModuleScript;
		Types: Folder;
	};
}
