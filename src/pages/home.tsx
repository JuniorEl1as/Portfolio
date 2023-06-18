import { Box, SimpleGrid } from '@chakra-ui/react'
import imagem from '../../public/imagens/d28d393b4d7267543e6b0c96b4673c9c.jpg'

export default function Home() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <Box w='60%' p={4} color='white' display="flex" justifyContent="center" marginTop="65px" h="full">
                <SimpleGrid columns={2} spacing={50} h="324px">
                    <SimpleGrid columns={2} spacing={5} backgroundColor="#181818" w="500px" padding="40px"  borderRadius="20px" >
                        <img src={imagem} alt="" width={224} height={224} style={{borderTopLeftRadius: "30px", borderBottomRightRadius: "30px"}} />
                        <div style={{backgroundColor: "#181818", paddingTop: "50px", }} >
                            <p style={{backgroundColor: "#181818"}}>Full Stack Developer</p>
                            <p style={{backgroundColor: "#181818", fontSize: "29px", marginTop: "20px", marginBottom: "20px", fontWeight: "500"}}>Junior Elias</p>
                            <p style={{backgroundColor: "#181818"}}>Eu sou um full stack developer</p>
                        </div>
                    </SimpleGrid>

                    <SimpleGrid columns={2} spacing={5} backgroundColor="white">
                        <img src={imagem} alt="" width={224} height={224} />
                        <Box bg='green' w='full' p={4} color='white' display="flex" justifyContent="center" alignItems="center">
                            This is the Box
                        </Box>
                    </SimpleGrid>
                </SimpleGrid>
            </Box>

        </div>

    )
}