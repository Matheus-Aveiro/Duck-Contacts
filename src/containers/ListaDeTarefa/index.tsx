import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import { Squeak } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) =>
          item.titulo.toLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }

      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementação =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'Todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: Todos ${complementação}`
    } else {
      mensagem = `${quantidade} contato(s) encontrado(s) como: "${`${valor}`}" ${complementação}`
    }

    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  const audioRef = useRef(new Audio('/squeak.mp3'))
  const reproduzirAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }

  return (
    <MainContainer>
      <Titulo as="">{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              telefone={t.telefone}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
        <Squeak onClick={reproduzirAudio}>
          <a>Squeak</a>
          <FontAwesomeIcon icon={faVolumeUp} />
        </Squeak>
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas
