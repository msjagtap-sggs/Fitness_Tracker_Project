import React from 'react'
import UpdateTask from './UpdateTask';
import { DeleteTask, DeleteAllTask } from './DeleteTask';
import { HStack, Box, VStack, Flex, Text, StackDivider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


function TaskList({ tasks, updateTask, deleteTask, deleteTaskAll, checkTask }:any) {

    if (!tasks.length) {
        return (
            <>
            {/* <Tag mt='20' p='5' variant='outline' colorScheme='gray'>
                <TagLabel>Sem Tarefas</TagLabel>
                <TagRightIcon as={BiTaskX} />
            </Tag> */}
                <Box maxW='80%'>
                    <Image mt='20px' w='98%' maxW='350' src={"https://github.com/raminhuk/react-todo-list/blob/main/src/images/empty.png?raw=true"} alt='Sua lista está vazia :(' />
                </Box>
            </>
        );
    }
  return (
      <>
        <VStack
            divider={<StackDivider />}
            borderColor='gray.200'
            borderWidth='2px'
            p='5'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            alignItems='stretch'
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-750 text-gray-800 dark:text-white shadow-md transition-colors duration-300"
            >
            
            {tasks.map((task:any) =>(
                <HStack
                key={task.id}
                opacity={task.check === true ? '0.3' : '1'}
                >
                    <Text
                        w='100%' 
                        p='8px'
                        borderRadius='lg'
                        cursor='pointer'
                        onClick={() => checkTask(task.id)}
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-150"
                        >
                        {task.body}
                    </Text>
                    <DeleteTask task={task} deleteTask={deleteTask} deleteTaskAll={deleteTaskAll} />
                    <UpdateTask task={task} updateTask={updateTask} />
                </HStack>
            ))}    
        </VStack>

        <Flex>
            <DeleteAllTask deleteTaskAll={deleteTaskAll} />
        </Flex>
    </>
  );
}

export default TaskList;