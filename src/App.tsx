import { AppBar, Avatar, Box, Button, Card, CardContent, Chip, Container, Link, Stack, Toolbar, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from "@mui/icons-material/MailOutlined";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { contact, profile, projects, technologies } from './content';

const sections = [['sobre-mi', 'Sobre mí'], ['proyectos', 'Proyectos'], ['tecnologias', 'Tecnologías'], ['contacto', 'Contacto']];

const blob = '58% 42% 63% 37% / 45% 55% 45% 55%';
const cut = '48px 12px 48px 12px';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 6, md: 9 }, scrollMarginTop: 72 }} aria-labelledby={`${id}-t`}>
      <Typography id={`${id}-t`} variant="h2" sx={{ fontSize: { xs: 34, md: 48 }, mb: 4 }}>{title}</Typography>
      {children}
    </Box>
  );
}

function Placeholder({ src, alt, hint }: { src: string; alt: string; hint: string }) {
  return src ? (
    <Box component="img" src={src} alt={alt} loading="lazy" sx={{ width: '100%', height: 190, objectFit: 'cover', borderRadius: '20px' }} />
  ) : (
    <Stack spacing={1} role="img" aria-label={alt}
      sx={{ alignItems: "center", justifyContent: "center", height: 190, borderRadius: "20px", bgcolor: 'rgba(79,219,203,.08)', border: '2px dashed rgba(79,219,203,.4)', color: 'primary.main', textAlign: 'center', px: 2 }}>
      <ImageOutlinedIcon />
      <Typography variant="body2">{hint}</Typography>
    </Stack>
  );
}

export default function App() {
  return (
    <>
      <Link href="#sobre-mi" sx={{ position: 'absolute', left: -999, '&:focus': { left: 8, top: 8, zIndex: 20, bgcolor: 'primary.main', color: 'primary.contrastText', p: 1.5, borderRadius: 3 } }}>
        Saltar al contenido
      </Link>
      <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'rgba(14,21,20,.85)', backdropFilter: 'blur(12px)', backgroundImage: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1100, width: '100%', mx: 'auto' }}>
          <Typography sx={{ fontWeight: 800 }}>Winareku</Typography>
          <Stack direction="row" spacing={{ xs: 0, sm: 1 }} component="nav" aria-label="Secciones">
            {sections.map(([id, label]) => (
              <Button key={id} href={`#${id}`} color="inherit" size="small" sx={{ px: { xs: 1, sm: 2 }, minWidth: 0 }}>{label}</Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" component="main">
        <Box sx={{ pt: { xs: 6, md: 11 }, display: 'grid', gap: 6, gridTemplateColumns: { xs: '1fr', md: '1.6fr 1fr' }, alignItems: 'center' }}>
          <Box>
            <Typography color="primary" sx={{ fontWeight: 700, mb: 2 }}>{profile.role}</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 52, sm: 76, md: 96 } }}>{profile.name}</Typography>
            <Typography sx={{ fontSize: { xs: 18, md: 22 }, color: 'text.secondary', mt: 3, maxWidth: 560 }}>{profile.tagline}</Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }} useFlexGap>
              <Button variant="contained" href="#proyectos">Ver proyectos</Button>
              <Button variant="outlined" href="#contacto">Contactar</Button>
            </Stack>
          </Box>
          <Avatar src={profile.photo || undefined} alt={profile.photoAlt}
            sx={{ width: { xs: 220, md: 320 }, height: { xs: 220, md: 320 }, borderRadius: blob, justifySelf: 'center', bgcolor: 'primary.main', color: 'primary.contrastText', fontSize: 120, fontWeight: 850 }}>
            {profile.name[0]}
          </Avatar>
        </Box>

        <Section id="sobre-mi" title="Sobre mí">
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' } }}>
            <Stack spacing={2} sx={{ maxWidth: 640 }}>
              {profile.about.map((p) => <Typography key={p} sx={{ fontSize: 18, lineHeight: 1.7 }}>{p}</Typography>)}
            </Stack>
            <Card sx={{ bgcolor: '#23403C', borderRadius: cut }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Áreas de interés</Typography>
                <Stack direction="row" useFlexGap spacing={1}>
                  {profile.interests.map((i) => <Chip key={i} label={i} color="primary" />)}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Section>

        <Section id="proyectos" title="Proyectos">
          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
            {projects.map((p, i) => (
              <Card key={p.name} component="article" sx={{ bgcolor: 'background.paper', borderRadius: i % 2 ? '12px 48px 12px 48px' : cut }}>
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                  <Placeholder src={p.image} alt={p.imageAlt} hint={`Agrega una captura en public/images/ y escribe su ruta en content.ts`} />
                  <Typography variant="h5" component="h3">{p.name}</Typography>
                  <Typography color="text.secondary">{p.problem}</Typography>
                  <Stack component="ul" spacing={0.5} sx={{ pl: 2.5, m: 0 }}>
                    {p.features.map((f) => <Typography key={f} component="li" variant="body2">{f}</Typography>)}
                  </Stack>
                  <Stack direction="row" useFlexGap spacing={1} aria-label="Tecnologías utilizadas">
                    {p.tech.map((t) => <Chip key={t} label={t} size="small" variant="outlined" color="primary" />)}
                  </Stack>
                  <Stack direction="row" useFlexGap spacing={1} sx={{ mt: 'auto', pt: 1 }}>
                    <Button variant="contained" size="small" href={p.repo} target="_blank" rel="noopener" startIcon={<GitHubIcon />}>Repositorio</Button>
                    {p.demo && <Button variant="outlined" size="small" href={p.demo} target="_blank" rel="noopener" endIcon={<OpenInNewIcon />}>Demo</Button>}
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Section>

        <Section id="tecnologias" title="Tecnologías del curso">
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
            {technologies.map((t) => (
              <Card key={t.name} sx={{ bgcolor: 'background.paper' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h5" color="primary" sx={{ mb: 1 }}>{t.name}</Typography>
                  <Typography color="text.secondary" sx={{ mb: 1.5 }}>{t.description}</Typography>
                  <Typography variant="body2"><b>Cómo lo usé: </b>{t.usage}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Section>

        <Section id="contacto" title="Contacto">
          <Card sx={{ bgcolor: '#23403C', borderRadius: '48px 12px 48px 12px' }}>
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography sx={{ fontSize: 20, mb: 3, maxWidth: 520 }}>¿Quieres colaborar o conversar sobre educación y tecnología? Escríbeme.</Typography>
              <Stack direction="row" useFlexGap spacing={2}>
                <Button variant="contained" href={`mailto:${contact.email}`} startIcon={<MailOutlineIcon />}>{contact.email}</Button>
                <Button variant="outlined" href={contact.github} target="_blank" rel="noopener" startIcon={<GitHubIcon />}>GitHub</Button>
                {contact.linkedin && <Button variant="outlined" href={contact.linkedin} target="_blank" rel="noopener" startIcon={<LinkedInIcon />}>LinkedIn</Button>}
              </Stack>
            </CardContent>
          </Card>
        </Section>
      </Container>
      <Box component="footer" sx={{ py: 4, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="body2">© {new Date().getFullYear()} {profile.name}. Hecho con React y MUI.</Typography>
      </Box>
    </>
  );
}
