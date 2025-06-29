import { Product } from '../types';
import productJson from './product.json' assert { type: 'json' };

// Import all images directly
import alooChudwa from '../../images/Aloo_Chudwa.webp';
import bananaPepperChips from '../../images/Banana_Pepper_Chips.webp';
import bombayMixture from '../../images/BombayMixture.webp';
import butterMurukul from '../../images/Butter_Murukul.webp';
import chabinaMixture from '../../images/Chabina_Mixture.webp';
import chanaJore from '../../images/Chana_Jore.webp';
import dalBizzi from '../../images/Dal_Bizzi.webp';
import dalMot from '../../images/Dal_Mot.webp';
import delhiChudwa from '../../images/Delhi_Chudwa.webp';
import drySamosa from '../../images/Dry_Samosa.webp';
import dryKachori from '../../images/Dry_Kachori.webp';
import ghatiya from '../../images/Ghatiya.webp';
import kashmiriDryfruitMixture from '../../images/Kashmiri_Dryfruit_Mixture.webp';
import kharaMixture from '../../images/Khara_Mixture.webp';
import masalaPara from '../../images/Masala_Para.webp';
import masalaTasty from '../../images/Masala_Tasty.webp';
import namakPara from '../../images/Namak_Para.webp';
import navratanMixture from '../../images/Navratan_Mixture.webp';
import papdiMixture from '../../images/Papdi_Mixture.webp';
import pappuChekkalu from '../../images/Pappu_Chekkalu.webp';
import redChikodi from '../../images/Red_Chikodi.webp';
import redSakinalu from '../../images/Red_Sakinalu.webp';
import ribbonPakoda from '../../images/Ribbon_Pakoda.webp';
import spicyChana from '../../images/Spicy_Chana.webp';
import whiteSakinalu from '../../images/White_Sakinalu.webp';
import yellowChikodi from '../../images/Yellow_Chikodi.webp';
import cashew from '../../images/cashew.jpg';

// Create image mapping
const imageMap: { [key: string]: string } = {
  './images/Aloo_Chudwa.webp': alooChudwa,
  './images/Banana_Pepper_Chips.webp': bananaPepperChips,
  './images/BombayMixture.webp': bombayMixture,
  './images/Butter_Murukul.webp': butterMurukul,
  './images/Chabina_Mixture.webp': chabinaMixture,
  './images/Chana_Jore.webp': chanaJore,
  './images/Dal_Bizzi.webp': dalBizzi,
  './images/Dal_Mot.webp': dalMot,
  './images/Delhi_Chudwa.webp': delhiChudwa,
  './images/Dry_Samosa.webp': drySamosa,
  './images/Dry_Kachori.webp': dryKachori,
  './images/Ghatiya.webp': ghatiya,
  './images/Kashmiri_Dryfruit_Mixture.webp': kashmiriDryfruitMixture,
  './images/Khara_Mixture.webp': kharaMixture,
  './images/Masala_Para.webp': masalaPara,
  './images/Masala_Tasty.webp': masalaTasty,
  './images/Namak_Para.webp': namakPara,
  './images/Navratan_Mixture.webp': navratanMixture,
  './images/Papdi_Mixture.webp': papdiMixture,
  './images/Pappu_Chekkalu.webp': pappuChekkalu,
  './images/Red_Chikodi.webp': redChikodi,
  './images/Red_Sakinalu.webp': redSakinalu,
  './images/Ribbon_Pakoda.webp': ribbonPakoda,
  './images/Spicy_Chana.webp': spicyChana,
  './images/White_Sakinalu.webp': whiteSakinalu,
  './images/Yellow_Chikodi.webp': yellowChikodi,
  './images/cashew.jpg': cashew,
};

export const products: Product[] = productJson.map((product: any) => ({
  id: product.id,
  name: product.name,
  price: product.variety[0]?.price || 0, // Use first variety's price as default
  image: imageMap[product.image] || product.image, // Use mapped image or fallback to original
  quantity: product.quantity,
  variety: product.variety,
  description: product.description,
  category: product.category
}));