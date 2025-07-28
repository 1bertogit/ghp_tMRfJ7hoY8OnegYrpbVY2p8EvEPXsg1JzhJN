
'use client';

import { useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, PlusCircle, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const initialMembers = [
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
  const [members, setMembers] = useState(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form state
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('');

  const handleAddMember = () => {
    if (!newMemberName || !newMemberEmail || !newMemberRole) return;

    const newMember = {
      id: members.length + 1,
      name: newMemberName,
      email: newMemberEmail,
      role: newMemberRole,
      status: 'Pendente',
      joined: new Date().toISOString().split('T')[0],
    };

    setMembers([newMember, ...members]);

    // Reset form and close dialog
    setNewMemberName('');
    setNewMemberEmail('');
    setNewMemberRole('');
    setIsDialogOpen(false);
  };
  
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="h-11 w-full md:w-auto px-5 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300">
                <PlusCircle className="w-5 h-5 mr-2" />
                Cadastrar Novo Aluno
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-pane max-w-lg">
                <DialogHeader>
                    <DialogTitle className="text-white/90 text-2xl font-light">Cadastrar Novo Membro</DialogTitle>
                    <DialogDescription className="text-white/50 font-extralight pt-1">
                        Preencha os dados para convidar um novo membro para a plataforma.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-white/70">Nome Completo</Label>
                        <Input id="name" value={newMemberName} onChange={e => setNewMemberName(e.target.value)} className="glass-input h-11 text-white/80" />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="email" className="text-white/70">E-mail</Label>
                        <Input id="email" type="email" value={newMemberEmail} onChange={e => setNewMemberEmail(e.target.value)} className="glass-input h-11 text-white/80" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role" className="text-white/70">Função</Label>
                        <Select onValueChange={setNewMemberRole}>
                            <SelectTrigger className="w-full h-11 glass-input text-white/80">
                                <SelectValue placeholder="Selecione a função" />
                            </SelectTrigger>
                            <SelectContent className="glass-pane">
                                <SelectItem value="Aluno">Aluno</SelectItem>
                                <SelectItem value="Mentor">Mentor</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleAddMember} className="h-12 w-full px-6 glass-button bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-300 text-base">
                        Enviar Convite
                    </Button>
                </DialogFooter>
            </DialogContent>
          </Dialog>
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
              {filteredMembers.map((member) => (
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
