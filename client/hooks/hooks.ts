import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import {
  addCocktail,
  deleteCocktail,
  editCocktail,
  getCocktails,
} from '../network/cocktailsAPI.ts'

export function useCocktails() {
  const query = useQuery(['cocktails'], getCocktails)
  return {
    ...query,
    useAddCocktail,
    useDeleteCocktail,
    useEditCocktail,
  }
}

export function useCocktailsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cocktails'] })
    },
  })

  return mutation
}

function useAddCocktail() {
  return useCocktailsMutation(addCocktail)
}

function useDeleteCocktail() {
  return useCocktailsMutation(deleteCocktail)
}

function useEditCocktail() {
  return useCocktailsMutation(editCocktail)
}
