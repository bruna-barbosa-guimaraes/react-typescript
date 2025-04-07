import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import { ITarefa } from "../../types/tasks";
import { useEffect, useState } from "react";
import { convertTimeToSeconds } from "../../common/utils/time";

interface Props {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export default function Timer({ selecionado, finalizarTarefa }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(convertTimeToSeconds(selecionado.tempo));
    }
  }, [selecionado]);

  function regressive(contador: number = 0) {
    if (contador > 0) {
      setTimeout(() => {
        setTempo(contador - 1);
        return regressive(contador - 1);
      }, 1000);
    }
    finalizarTarefa();
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch tempo={tempo} />
      </div>
      <Button onClick={() => regressive(tempo)}>Começar!</Button>
    </div>
  );
}
