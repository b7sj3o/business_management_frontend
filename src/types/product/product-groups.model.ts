import { ProductInfo } from './product.model'

export interface StrengthGroupedProducts {
	[strength: string]: ProductInfo[]
}

export interface VolumeGroupedProducts {
	[volume: string]: StrengthGroupedProducts[]
}

export interface ReadyLiquidProduct {
	[volume: string]: StrengthGroupedProducts[]
}

export interface MixLiquidProduct {
	[liquid_model: string]: VolumeGroupedProducts[]
}

export interface DisposableProduct {
	[puffsAmount: string]: ProductInfo[]
}

export interface CartridgeProduct {
	[resistance: string]: ProductInfo[]
}

export interface CartridgeModelGroupedProducts {
	[cartridge_model: string]: CartridgeProduct[]
}

export interface PodProduct {
	[podModel: string]: ProductInfo[]
}

export interface ProductTypeGroup {
	[producer: string]:
		| ReadyLiquidProduct
		| MixLiquidProduct
		| DisposableProduct
		| CartridgeProduct
		| PodProduct
}

export interface ProductTree {
	[productType: string]: ProductTypeGroup
}
