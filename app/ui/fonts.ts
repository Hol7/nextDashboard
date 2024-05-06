import { Inter , Roboto_Mono , Lusitana , Poppins} from 'next/font/google';
 
// export const inter = Inter({ subsets: ['latin'] });
export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: '100'
  })
   
  export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
    weight: '500'
  })

  export const lusitana = Lusitana({
      subsets: ['latin'],
      variable: '--font-lusitana',
      display: 'swap',
      weight: '400'
  })

  export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
    weight: '900'
})