
import { ContainerAvatar, ContainerButton, ContainerHeader, ContainerInfos, ContainerProtocol, NameTypography, ProtocolTypography, ToTypography } from './style';
import ChatMenu from '../menu';
import { Avatar, Button } from '@mui/material';
import { CopyAll, Person } from '@mui/icons-material';
import avatarImag from "../../assets/images/avatar.png"

export default function ChatHeader() {
  return (
    <ContainerHeader>
        <ContainerAvatar>
            <Avatar src={avatarImag} sx={{
                alignSelf: "center"
            }}>
                <Person />
            </Avatar>
            <ContainerInfos>
            <NameTypography>
                Group Messages
            </NameTypography>
            <ToTypography>
                Atribuido à: Fábio Borges
            </ToTypography>
            </ContainerInfos>
            <ContainerProtocol>
                <CopyAll color='primary' fontSize='small' />
                <ProtocolTypography>
                    70BB7787
                </ProtocolTypography> 
            </ContainerProtocol>
        </ContainerAvatar>

        <ContainerButton>
            <Button>
                Encerrar chat
            </Button>
            <ChatMenu />
        </ContainerButton>
    </ContainerHeader>
  );
}
