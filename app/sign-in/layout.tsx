import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genix - Iniciar sesión",
  description: "Inicia sesión en Genix para acceder a tu cuenta",
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <svg width="119" height="29" viewBox="0 0 119 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M80.6269 0.518494L75.9807 24.5893L63.249 0.518494H61.2848L60.6548 4.12777L58.8554 0.518494H55.9316L51.0781 28.284H53.675L57.9543 3.81253L70.0587 28.284H72.9825L73.6204 24.6614L75.4119 28.284H78.3357L83.2317 0.518494H80.6269ZM71.1033 25.0942L62.5765 7.98818L63.0576 5.18571L71.4621 21.6826L71.1033 25.0969V25.0942Z" fill="#0C1F26"></path><path d="M91.2907 0.518494H88.46V28.284H91.2907V0.518494Z" fill="#0C1F26"></path><path d="M100.753 0.518494L108.403 12.1879L116.053 0.518494H118.873L109.79 14.3144L119 28.2814H116.186L108.403 16.3929L100.623 28.2814H97.8057L107.016 14.3144L97.9359 0.518494H100.753Z" fill="#0C1F26"></path><path d="M30.8857 0.518494V28.2814H45.8953V26.1762H33.7165V15.14H45.2468V13.0214H33.7165V2.62636H45.7651V0.518494H30.8857Z" fill="#0C1F26"></path><path d="M23.2624 16.6682C23.2624 20.232 23.2624 23.7986 23.2624 27.3624C23.2624 27.3624 20.9898 28.0383 20.732 28.0944C19.597 28.3376 18.4541 28.57 17.3005 28.6822C12.9414 29.107 8.4654 28.6955 4.95953 25.8209C4.31896 25.2973 3.72889 24.7069 3.20793 24.0631C1.38455 21.827 0.305416 19.0378 0.0661985 16.1632C-0.220863 12.741 0.39313 9.11833 2.27498 6.209C3.97342 3.58286 6.51977 1.87039 9.41164 0.804434C9.41164 0.804434 15.0625 -1.37556 22.8371 1.44561L22.4145 3.51073C22.4145 3.51073 15.2725 0.772375 9.98577 2.92031C7.48195 3.93818 5.60276 5.70675 4.2153 8.00162C2.68431 10.5343 2.23245 14.0607 2.69228 16.93C3.20527 20.1385 5.2333 23.9054 8.21556 25.3962C12.0563 27.317 16.8806 26.9751 20.7798 25.9438C20.7798 22.8528 20.7798 19.7618 20.7772 16.6708C21.6064 16.6708 22.4331 16.6708 23.2624 16.6708V16.6682Z" fill="#0C1F26"></path></svg>
        </div>
        {children}
      </div>
    </div>
  )
}