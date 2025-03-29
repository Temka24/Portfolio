import { Roboto, Roboto_Mono, Sora } from 'next/font/google';

export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700']
})

export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700']
})

export const sora = Sora({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '700']
})