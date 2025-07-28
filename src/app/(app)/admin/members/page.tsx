
'use client';

import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, PlusCircle, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const members = [
  { id: 1, name: 'Ana Couto', email: 'ana.couto@email.com', role: 'Mentor', status: 'Ativo', joined: '2023-01-15' },
  { id: 2, name: 'Lucas Martins', email: 'lucas.martins@email.com', role: 'Aluno', status: 'Ativo', joined: '2023-02-20' },
  { id: 3, name: 'Sofia Ferreira', email: 'sofia.ferreira@email.com', role: 'Aluno', status: 'Inativo', joined: '2023-03-10' },
  { id: 4, name: 'Carlos Andrade', email: 'carlos.andrade@email.com', role: 'Aluno', status: 'Ativo', joined: '2023-04-05' },
  { id: 5, name: 'Gabriela Lima', email: 'gabriela.lima@email.com', role: 'Mentor', status: 'Ativo', joined: '2023-05-21' },
  { id: 6, name: 'Pedro Almeida', email: 'pedro.almeida@email.com', role: 'Aluno', status: 'Pendente', joined: '2023-06-30' },
];

const statusColors: { [key: string]: string } = {
  'Ativo': 'bg-green-500/20 text-green-300',
  'Inativo': 'bg-gray-500/20 text-gray-300',
  'Pendente': 'bg-yellow-500/20 text-yellow-300',
};

export default function MembersPage() {
  return (
    <div className="w-full">
      <GlassCard>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              className="glass-input h-11 pl-12 w-full text-white/80"
            />
          </div>
          <Button className="h-11 w-full md:w-auto px-5 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
            <PlusCircle className="w-5 h-5 mr-2" />
            Cadastrar Novo Aluno
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-white/10 hover:bg-transparent">
                <TableHead className="text-white/80">Nome</TableHead>
                <TableHead className="text-white/80">E-mail</TableHead>
                <TableHead className="text-white/80">Função</TableHead>
                <TableHead className="text-white/80">Status</TableHead>
                <TableHead className="text-white/80">Data de Inscrição</TableHead>
                <TableHead className="text-right text-white/80">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id} className="border-white/10">
                  <TableCell className="font-medium text-white/95">{member.name}</TableCell>
                  <TableCell className="text-white/70">{member.email}</TableCell>
                  <TableCell className="text-white/70">{member.role}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`border-0 ${statusColors[member.status]}`}>{member.status}</Badge>
                  </TableCell>
                  <TableCell className="text-white/70">{new Date(member.joined).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                         <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                            <span className="sr-only">Abrir menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="glass-pane">
                        <DropdownMenuItem>Ver Detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar Permissões</DropdownMenuItem>
                        <DropdownMenuItem>Remover Usuário</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </GlassCard>
    </div>
  );
}
