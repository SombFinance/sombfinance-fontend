import React from 'react';

//Graveyard ecosystem logos
// import tombLogo from '../../assets/img/crypto_tomb_cash.svg';
import tombLogoPNG from '../../assets/img/crypto_tomb_cash.png';
// import tShareLogo from '../../assets/img/crypto_tomb_share.svg';
import tShareLogoPNG from '../../assets/img/crypto_tomb_share.png';
// import tBondLogo from '../../assets/img/crypto_tomb_bond.svg';
import tBondLogoPNG from '../../assets/img/crypto_tomb_bond.png';

import tombFtmLpLogo from '../../assets/img/tomb_ftm_lp.png';
import tshareFtmLpLogo from '../../assets/img/tshare_ftm_lp.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import booLogo from '../../assets/img/spooky.png';
import zooLogo from '../../assets/img/zoo_logo.svg';
import shibaLogo from '../../assets/img/shiba_logo.svg';

const logosBySymbol: {[title: string]: string} = {
  //Real tokens
  //=====================
  SOMB: tombLogoPNG,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  SSHARE: tShareLogoPNG,
  SBOND: tBondLogoPNG,
  WFTM: wftmLogo,
  BOO: booLogo,
  SHIBA: shibaLogo,
  ZOO: zooLogo,
  'SOMB-FTM-LP': tombFtmLpLogo,
  'SSHARE-FTM-LP': tshareFtmLpLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({symbol, size = 64}) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
