import { Box, Input, Stack, Button } from "@mui/material";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useFormik } from "formik";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import LinkTool from "@editorjs/link";
import api from '../../lib/axios/blog'

const Editor = () => {
	const [editorData, setEditorData] = useState()
	const editorJSRef = useRef(null)

	const formik = useFormik({
		initialValues: {
			title: '',
			description: ''
		},
		onSubmit: ({title, description}) => {
			const payload = {
				title,
				description,
				data: editorData,
				profileId: 1
			}
			console.log(payload)
			api.blogs.create(payload)
				.then(res => res.data)
				.then(data => {
					console.log('create success', data)
				})
				.catch(err => {
					console.log('error creating', err.response.data)
				})
		}
	})

	useLayoutEffect(() => {
		if(editorJSRef.current) return
		const editor = new EditorJS({
			holder: 'editorjs',
			onChange: (api, event) => {
				api.saver.save()
					.then(data => {
						console.log('content saved', data)
						setEditorData(data)
					})
					.catch(err => {
						console.log('saving failed', err)
					})
			},
			tools: {
				header: {
					class: Header
				},
				embed: {
					class: Embed
				},
				link: {
					class: LinkTool,
					config: {
						endpoint: '/api/metadata'
					}
				}
			}
		})

		editor.isReady.then(() => {
			editorJSRef.current = editor
		})
			.catch(err => {
				console.log('editorjs failed to start', err)
			})
	}, [])

	return (
		<Stack
			flexGrow={1}
		>
			<Input 
				placeholder='Title'
				sx={{
					fontSize: '60px',
					fontWeight: 500
				}}
				name='title'
				value={formik.values.title}
				onChange={formik.handleChange}
			/>
			<Box
				id='editorjs'
			>

			</Box>
			<Stack
				direction='row'
			>
				<Button
					variant='contained'
					onClick={formik.handleSubmit}
				>
					Publish
				</Button>
			</Stack>
		</Stack>
	);
}

export default Editor;
