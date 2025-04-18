import style from "./Watch.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Watch({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = Array.from(
    String(minutos).padStart(2, "0")
  );
  const [segundoDezena, segundoUnidade] = Array.from(
    String(segundos).padStart(2, "0")
  );

  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
}
