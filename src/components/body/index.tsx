import { ContainerBody } from './style';
import { ChatMessage } from '../../data/type';

export default function ChatBody({messages}: {messages: ChatMessage[]}) {

  return (
    <ContainerBody>
        {
            messages.map((message) => {
                return <div>
                    {message.body}
                </div>
            })
        }    
    </ContainerBody>
  );
}
